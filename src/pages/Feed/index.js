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
    PostRightImage,
    PostRightIcons,
    PostRightIconsItem,
    PostRightIconsItemOne
} from './styles'
import { MaterialIcons } from '@expo/vector-icons';
export default function Feed() {
    const imagemAvatar = "https://avatars.githubusercontent.com/u/77861206?v=4";
    const imagemBody = "https://user-images.githubusercontent.com/77861206/106316870-2e5fd100-624c-11eb-9647-05b58a922afe.png";
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
                                <MaterialIcons name="keyboard-arrow-down" size={25} color="white" />
                            </PostRightNameArrow>
                        </PostRightName>
                        <PostRightText>
                            Ola, tudo bem??? Olha meu cloneeee do twiiiiteeeerrrr webbbbbbb #cooode ❤️
                        </PostRightText>
                        <PostRightImage source={{uri: imagemBody}} />
                        <PostRightIcons>
                            <PostRightIconsItemOne><MaterialIcons name="message" size={23} color="white" /></PostRightIconsItemOne>
                            <PostRightIconsItem><MaterialIcons name="favorite-border" size={23} color="white" /></PostRightIconsItem>
                            <PostRightIconsItem><MaterialIcons name="send" size={23} color="white" /></PostRightIconsItem>
                        </PostRightIcons>

                    </PostRight>

                </Post>
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
                                <MaterialIcons name="keyboard-arrow-down" size={25} color="white" />
                            </PostRightNameArrow>
                        </PostRightName>
                        <PostRightText>
                            Ola, tudo bem??? to fazendo uns testes aqui, escrevendo um monte e olha meu novo tweet cheio de emojis ❤️😄🙂
                        </PostRightText>
                        <PostRightIcons>
                            <PostRightIconsItemOne><MaterialIcons name="message" size={23} color="white" /></PostRightIconsItemOne>
                            <PostRightIconsItem><MaterialIcons name="favorite-border" size={23} color="white" /></PostRightIconsItem>
                            <PostRightIconsItem><MaterialIcons name="send" size={23} color="white" /></PostRightIconsItem>
                        </PostRightIcons>

                    </PostRight>

                </Post>
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
                                <MaterialIcons name="keyboard-arrow-down" size={25} color="white" />
                            </PostRightNameArrow>
                        </PostRightName>
                        <PostRightText>
                            Ola, tudo bem??? to fazendo uns testes aqui, escrevendo um monte e olha meu novo tweet cheio de emojis ❤️😄🙂
                        </PostRightText>
                        <PostRightIcons>
                            <PostRightIconsItemOne><MaterialIcons name="message" size={23} color="white" /></PostRightIconsItemOne>
                            <PostRightIconsItem><MaterialIcons name="favorite-border" size={23} color="white" /></PostRightIconsItem>
                            <PostRightIconsItem><MaterialIcons name="send" size={23} color="white" /></PostRightIconsItem>
                        </PostRightIcons>

                    </PostRight>

                </Post>
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
                                <MaterialIcons name="keyboard-arrow-down" size={25} color="white" />
                            </PostRightNameArrow>
                        </PostRightName>
                        <PostRightText>
                            Ola, tudo bem??? to fazendo uns testes aqui, escrevendo um monte e olha meu novo tweet cheio de emojis ❤️😄🙂
                        </PostRightText>
                        <PostRightIcons>
                            <PostRightIconsItemOne><MaterialIcons name="message" size={23} color="white" /></PostRightIconsItemOne>
                            <PostRightIconsItem><MaterialIcons name="favorite-border" size={23} color="white" /></PostRightIconsItem>
                            <PostRightIconsItem><MaterialIcons name="send" size={23} color="white" /></PostRightIconsItem>
                        </PostRightIcons>

                    </PostRight>

                </Post>
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
                                <MaterialIcons name="keyboard-arrow-down" size={25} color="white" />
                            </PostRightNameArrow>
                        </PostRightName>
                        <PostRightText>
                            Ola, tudo bem??? to fazendo uns testes aqui, escrevendo um monte e olha meu novo tweet cheio de emojis ❤️😄🙂
                        </PostRightText>
                        <PostRightIcons>
                            <PostRightIconsItemOne><MaterialIcons name="message" size={23} color="white" /></PostRightIconsItemOne>
                            <PostRightIconsItem><MaterialIcons name="favorite-border" size={23} color="white" /></PostRightIconsItem>
                            <PostRightIconsItem><MaterialIcons name="send" size={23} color="white" /></PostRightIconsItem>
                        </PostRightIcons>

                    </PostRight>

                </Post>
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
                                <MaterialIcons name="keyboard-arrow-down" size={25} color="white" />
                            </PostRightNameArrow>
                        </PostRightName>
                        <PostRightText>
                            Ola, tudo bem??? to fazendo uns testes aqui, escrevendo um monte e olha meu novo tweet cheio de emojis ❤️😄🙂
                        </PostRightText>
                        <PostRightIcons>
                            <PostRightIconsItemOne><MaterialIcons name="message" size={23} color="white" /></PostRightIconsItemOne>
                            <PostRightIconsItem><MaterialIcons name="favorite-border" size={23} color="white" /></PostRightIconsItem>
                            <PostRightIconsItem><MaterialIcons name="send" size={23} color="white" /></PostRightIconsItem>
                        </PostRightIcons>

                    </PostRight>

                </Post>
            </PostList>
        </View>
    )
}