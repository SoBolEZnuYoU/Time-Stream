import styled from "styled-components"
import { COLOR } from "../../../../constants"

const ProjectsContainer = ({className}) => {
    return (
        <div className={className}>
            <h2>Проекты</h2>
            <div className='info'>
                <div className='graph-block'></div>
                <div className='text-block'></div>
            </div>
        </div>
    )
}

export const Projects = styled(ProjectsContainer)`
    height: 33.33%;

    & h2 {
        height: 25%;
        text-align: center;
        font-size: 30px;
        padding: 19px 0;
        background-color: ${COLOR.DARK};
        border-left: 1px solid ${COLOR.LIGHT};
        color: ${COLOR.LIGHT};
    }
`