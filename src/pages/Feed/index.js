import React from 'react'
import {
    PostList,
    Post,
    PostLeft,
    PostLeftImage,
    View,
    PostRight,
    PostRightName,
    PostRightNamePerson,
    PostRightNameUser,
    PostRightNameArrow,
    PostRightText,
    PostRightIcons
} from './styles'
import { MaterialIcons } from '@expo/vector-icons';
export default function Feed() {
    const imagemAvatar = "https://avatars.githubusercontent.com/u/77861206?v=4"
    const imagemBody = "https://user-images.githubusercontent.com/77861206/108550523-70b98280-72cd-11eb-8cb1-62b0dee4c1c1.PNG"
    return (
        <View>
            <PostList>

                <Post>
                    <PostLeft>
                        <PostLeftImage source={{ uri: imagemAvatar }} />
                    </PostLeft>
                    <PostRight>
                        <PostRightName>
                            <PostRightNamePerson>
                                gustavo
                            </PostRightNamePerson>
                            <PostRightNameUser>
                                @noronhaax
                            </PostRightNameUser>
                            <PostRightNameArrow>
                                <MaterialIcons name="keyboard-arrow-down" size={25} color="gray" />
                            </PostRightNameArrow>
                        </PostRightName>
                        <PostRightText>
                            Ola, olha meu novo tweet cheio de emojis ❤️😄🙂
                        </PostRightText>
                        <PostRightIcons>
                            <MaterialIcons name="message" size={25} color="gray" />
                            <MaterialIcons name="favorite-border" size={25} color="gray" />
                            <MaterialIcons name="send" size={25} color="gray" />
                        </PostRightIcons>

                    </PostRight>

                </Post>
            </PostList>
        </View>
    )
}