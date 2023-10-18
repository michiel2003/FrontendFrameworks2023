import styled from 'styled-components'
import {FunctionComponent} from 'react'

const Card = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #18191A;
  color: white;
`

const Avatar = styled.img`
  margin-right: 0.5em;
  height: 5em;
  margin-bottom: 0;
`

const Author = styled.div`
  font-size: 110%;
  color: #bdc4d0;
  margin: 0;
`

const CommentContent = styled.div`
  margin: 0;
  color: #6c757d;
  width: 100%;
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
interface CommentSectionProps {
    firstName: string
    lastName: string
    content: string
    isOpen: boolean
    setIsOpen: () => void
}

const CommentSection: FunctionComponent<CommentSectionProps> = ({firstName, lastName, content, isOpen, setIsOpen}) => {
    if(!isOpen){
        content = `${content.slice(0, 30)}...`
    }
    return (
        <SectionContainer>
            <Author>
                {firstName} {lastName}
            </Author>
            <CommentContent>
                {content}<br/>
                <p onClick={setIsOpen}>Read{isOpen ? " Less" : " More"}</p>
            </CommentContent>
        </SectionContainer>
    )
}

interface CommentCardProps {
    avatar: string
}

const CommentCard: FunctionComponent<CommentCardProps & CommentSectionProps> = ({avatar, ...rest}) => {
    return (
        <Card>
            <Avatar src={avatar}/>
            <CommentSection {...rest}/>
        </Card>
    )
}

export default CommentCard
