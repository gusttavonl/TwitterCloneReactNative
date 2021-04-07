import Styled from 'styled-components/native'


export const View = Styled.View`
    background-color: black;
    height:100%;
`;


export const PostList = Styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    margin-top: 25px;
`;

export const Post = Styled.View`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
`;

export const PostLeft = Styled.View`
    
`;


export const PostLeftImage = Styled.Image`
    height: 60px;
    width: 50px;
    border-radius: 100px;
`;

export const PostRight = Styled.View`
    
`;

export const PostRightName = Styled.View`
    display: flex;
    flex-direction: row;
`;


export const PostRightNamePerson = Styled.Text`
    font-weight: bold;
    color: white;
    margin-left: 10px;
    font-size: 17px;
`;

export const PostRightNameUser = Styled.Text`
    margin-left: 5px;
    color: white;
    margin-left: 10px;
    font-size: 17px;
`;


export const PostRightNameArrow = Styled.View`
    margin-left: 160px;
    margin-top: -2px;
`;

export const PostRightText = Styled.Text`
   font-size: 17px;
   color: white;
   margin-left: 5px;
`;

export const PostRightImage = Styled.Image`
   width: 330px;
   height: 180px;
   border-radius: 10px;
   margin-left: 10px;
   margin-top:10px;
`;


export const PostRightIcons = Styled.View`
   display: flex;
   flex-direction: row;
   margin-top: 20px;
`;

export const PostRightIconsItemOne = Styled.View`
    margin-left: 10px;
`;

export const PostRightIconsItem = Styled.View`
    margin-left: 120px;
`;






