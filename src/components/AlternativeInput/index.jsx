import { Container } from "./styles"

export function AlternativeInput({label, title, ...rest}){
    return(
        <Container>
            <label htmlFor={label}>
                {title}
            </label>

            <input 
            id={label} 
            {...rest} 
            />
        </Container>
    )
}