// Import de estilizações
import { Container, Main, ButtonBack, AllIngredientCards, Content } from './style';


import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { Button } from '../../components/Button/'
import { IngredientCard } from '../../components/IngredientCard/'


import { IoIosArrowBack } from 'react-icons/io'
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { BiMinus, BiPlus } from 'react-icons/bi'


import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/authContext';


export function Details(){
        // Começando em 1 a quantidade
        const [quantity, setQuantity] = useState(1)
        const [data, setData] = useState(null)

        const params = useParams()
        const navigate = useNavigate()
        const { user } = useAuth()

        
    
        const imageURL = data && `${api.defaults.baseURL}/files/dishFiles/${data.image}`
        
        function handleAddItem() {
            setQuantity (quantity+1)
        }
        
        function handleRemoveItem() {
            setQuantity (quantity-1)
            if(quantity == 1){
                setQuantity(1)
            }
        }

        async function handleDeleteDish(){
            const confirm = window.confirm("Deseja realmente deletar o prato do cardápio?")
        
            if(confirm){
                await api.delete(`/adminDishes/${data.id}`)
                navigate(-1)
            }
        }

        function handleGoToEditPage(){
            navigate(`/edit/${data.id}`)
        }

        useEffect(() => {
            async function fetchDish(){
                const responseAPI = await api.get(`/dishes/${params.id}`)
                setData(responseAPI.data)
            }

            fetchDish()
        }, [])

        const formattedPrice = data ? Number(data.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }) : '';

    return(
        <Container>
            <Header />

            {
            data &&
            <Main>

            <ButtonBack>
                    <Link to ='/'>
                        <IoIosArrowBack size={32} />
                        Voltar
                    </Link>
            </ButtonBack>
            
            
            <Content>
            <img src={imageURL} alt="Imagem do prato" />

            <div className='details'>
                <div className='details-wrapper'>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            

                <AllIngredientCards>
                {
                data.ingredients.map ((ingredient) => (
                    <IngredientCard 
                    key={String(ingredient.id)}
                    ingredient={ingredient.name}
                    />
                ))
                }
                </AllIngredientCards>
                


                <div className='AmountItemsAndBuy-wrapper'>

                    <h4>{formattedPrice}</h4>

                    {
                    !user.isAdmin ?
                    <div className='Amount'>
                        <button 
                        className='MinusItem'
                        onClick={handleRemoveItem}
                        >
                            <BiMinus />
                        </button>

                        <span>0{quantity}</span>
                    
                        <button 
                        className='PlusItem'
                        onClick={handleAddItem}
                        >
                            <BiPlus />
                        </button>

                        <Button title="incluir"/>
                    </div>

                    :

                    <div className='Amount'>
                        <MdDelete onClick={handleDeleteDish} />
                        <HiPencilAlt title="Editar" onClick={handleGoToEditPage} />
                    </div>
                    }

                </div>

            </div>

            </Content>
            

            </Main>
            }

            <Footer />
        </Container>
    )
}