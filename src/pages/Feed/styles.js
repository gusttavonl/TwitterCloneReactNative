import Styled from 'styled-components/native'


export const View = Styled.View`
    background-color: white;
`;


export const PostList = Styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    margin-top: 5px;
    background-color: white;
`;

export const Post = Styled.View`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

export const PostLeft = Styled.View`
    
`;


export const PostLeftImage = Styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 100px;
`;

export const PostRight = Styled.View`
    
`;

export const PostRightName = Styled.View`
    display: flex;
    flex-direction: row;
`;


export const PostRightNamePerson = Styled.Text`
    fonte-weight: bold;
`;

export const PostRightNameUser = Styled.Text`
    margin-left: 5px;
`;


export const PostRightNameArrow = Styled.View`
    margin-left: 100px;
`;

export const PostRightText = Styled.Text`
   font-size: 17px;
`;

export const PostRightIcons = Styled.View`
   display: flex;
   flex-direction: row;
    margin-left: 100px;
`;





