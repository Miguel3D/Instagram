import React from "react";
import { AppLoading } from "expo";
import {
  Container,
  Text,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Card,
  CardItem,
  Content,
  Footer,
  FooterTab,
  Item,
  Input
} from "native-base";

import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Alert
} from "react-native";

import Emoji from "react-native-emoji";

import { Video } from "expo-av";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import Icon3 from "react-native-vector-icons/Feather";
import Icon4 from "react-native-vector-icons/Foundation";
import Icon5 from "react-native-vector-icons/AntDesign";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      showMe1: false,
      showMe2: false,
      showMe3: false,
      showMe4: false,
      showMe5: false,

      buttonColor: "#000",
      name: "heart-o",

      buttonColor2: "#000",
      name2: "heart-o",

      buttonColor3: "#000",
      name3: "heart-o",

      buttonColor4: "#000",
      name4: "heart-o",

      buttonColor5: "#000",
      name5: "heart-o"
    };
  }

  onButtonPress = () => {
    if (this.state.buttonColor == "#FB1914") {
      this.setState({ buttonColor: "#000", name: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor: "#FB1914", name: "heart" }); // red
    }
  };

  onButtonPress2 = () => {
    if (this.state.buttonColor2 == "#FB1914") {
      this.setState({ buttonColor2: "#000", name2: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor2: "#FB1914", name2: "heart" }); // red
    }
  };

  onButtonPress3 = () => {
    if (this.state.buttonColor3 == "#FB1914") {
      this.setState({ buttonColor3: "#000", name3: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor3: "#FB1914", name3: "heart" }); // red
    }
  };

  onButtonPress4 = () => {
    if (this.state.buttonColor4 == "#FB1914") {
      this.setState({ buttonColor4: "#000", name4: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor4: "#FB1914", name4: "heart" });
    }
  };

  onButtonPress5 = () => {
    if (this.state.buttonColor5 == "#FB1914") {
      this.setState({ buttonColor5: "#000", name5: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor5: "#FB1914", name5: "heart" }); // red
    }
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Instagram: require("./assets/fonts/Billabong.ttf"),

      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <View
          style={{ paddingTop: 25, color: "black", backgroundColor: "#E1E1E1" }}
        ></View>
        {/* Header */}
        <Header
          style={{
            backgroundColor: "#F5F5F5",
            elevation: 2
          }}
        >
          <Left transparent>
            <Button transparent>
              <Icon3 name="camera" size={25} color="#000" />
            </Button>
          </Left>
          <Body>
            <Title
              style={{
                color: "#000",
                fontFamily: "Instagram",
                fontSize: 30,
                paddingTop: 16
              }}
            >
              Instagram
            </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="tv" size={25} color="#000" />
            </Button>
            <Button transparent>
              <Icon2 name="paper-plane" size={25} color="#000" />
            </Button>
          </Right>
        </Header>
        <Content>
          <ScrollView>
            {/* Historias */}
            <ScrollView horizontal={true}>
              <Card transparent>
                <CardItem cardBody>
                  <Left
                    style={{
                      height: null,
                      width: null,
                      flex: 1
                    }}
                  >
                    <Card
                      vertical
                      transparent
                      style={{
                        alignItems: "center",
                        marginLeft: 10,
                        paddingLeft: 10
                      }}
                    >
                      <Image
                        source={require("./assets/Imagenes/Historias/fornite.jpg")}
                        style={styles.imagehistoP}
                      />
                      <Text
                        style={{
                          color: "black",
                          fontSize: 14
                        }}
                      >
                        Tu historia
                      </Text>
                    </Card>
                    <Card
                      vertical
                      transparent
                      style={{
                        alignItems: "center",
                        marginLeft: 10,
                        paddingLeft: 10
                      }}
                    >
                      <Image
                        source={require("./assets/Imagenes/Historias/dead.jpg")}
                        style={styles.imagehisto}
                      />
                      <Text
                        style={{
                          color: "black",
                          fontSize: 14
                        }}
                      >
                        Deadmau5
                      </Text>
                    </Card>
                    <Card
                      vertical
                      transparent
                      style={{
                        alignItems: "center",
                        marginLeft: 10,
                        paddingLeft: 10
                      }}
                    >
                      <Image
                        source={require("./assets/Imagenes/Historias/dimitri.jpg")}
                        style={styles.imagehisto}
                      />
                      <Text
                        style={{
                          color: "black",
                          fontSize: 14
                        }}
                      >
                        dimitri veg...
                      </Text>
                    </Card>
                    <Card
                      vertical
                      transparent
                      style={{
                        alignItems: "center",
                        marginLeft: 10,
                        paddingLeft: 10
                      }}
                    >
                      <Image
                        source={require("./assets/Imagenes/Historias/marshmello.jpg")}
                        style={styles.imagehisto}
                      />
                      <Text
                        style={{
                          color: "black",
                          fontSize: 14
                        }}
                      >
                        Marshmello
                      </Text>
                    </Card>
                    <Card
                      vertical
                      transparent
                      style={{
                        alignItems: "center",
                        marginLeft: 10,
                        paddingLeft: 10
                      }}
                    >
                      <Image
                        source={require("./assets/Imagenes/Historias/snake.jpg")}
                        style={styles.imagehisto}
                      />
                      <Text
                        style={{
                          color: "black",
                          fontSize: 14
                        }}
                      >
                        Dj snake
                      </Text>
                    </Card>
                    <Card
                      vertical
                      transparent
                      style={{
                        alignItems: "center",
                        marginLeft: 10,
                        paddingLeft: 10
                      }}
                    >
                      <Image
                        source={require("./assets/Imagenes/Historias/tiesto.jpg")}
                        style={styles.imagehisto}
                      />
                      <Text
                        style={{
                          color: "black",
                          fontSize: 14
                        }}
                      >
                        Tiesto
                      </Text>
                    </Card>
                    <Card
                      vertical
                      transparent
                      style={{
                        alignItems: "center",
                        marginLeft: 10,
                        paddingLeft: 10
                      }}
                    >
                      <Image
                        source={require("./assets/Imagenes/Historias/timmy.jpg")}
                        style={styles.imagehisto}
                      />
                      <Text
                        style={{
                          color: "black",
                          fontSize: 14
                        }}
                      >
                        Timmy trumpet
                      </Text>
                    </Card>
                  </Left>
                </CardItem>
              </Card>
            </ScrollView>
            {/* Publicaciones             */}
            {/* 1 */}
            <View>
              <Card transparent>
                <CardItem>
                  <Left>
                    <View style={{ height: 40, width: 50, borderRadius: 64 }}>
                      <Image
                        source={require("./assets/Imagenes/Historias/dead.jpg")}
                        style={styles.imageperfil}
                      />
                    </View>
                    <Text>Deadmau5</Text>
                  </Left>
                  <Right>
                    <Icon3 name="more-vertical" size={25} color="#000" />
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={require("./assets/Imagenes/Publicaciones/dead2.jpg")}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                  <Left>
                    <Button transparent>
                      <Icon
                        name={this.state.name}
                        size={25}
                        color={this.state.buttonColor}
                        onPress={this.onButtonPress}
                      />
                    </Button>
                    <Button
                      transparent
                      onPress={() => {
                        this.setState({ showMe1: true });
                      }}
                    >
                      <Icon3 name="message-circle" size={26} color="#000" />
                    </Button>
                    <Button transparent>
                      <Icon2 name="paper-plane" size={25} color="#000" />
                    </Button>
                  </Left>
                  <Right>
                    <Icon name="bookmark-o" size={25} color="#000" />
                  </Right>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                      54.591 Me gusta
                    </Text>
                    <Text>
                      <Text style={{ fontWeight: "bold" }}>Deadmau5</Text>
                      <Text> When the mau5heads took over our LA pop up</Text>
                      <Emoji name="smile" style={{ fontSize: 16 }} />
                      <Emoji name="smile" style={{ fontSize: 16 }} />
                      <Emoji name="smile" style={{ fontSize: 16 }} />
                      <Emoji name="smile" style={{ fontSize: 16 }} />
                      <Emoji name="smile" style={{ fontSize: 16 }} />
                      {"\n"}
                      photo creds/@leahsems
                      <Text style={{ color: "blue" }}> #cubev3</Text>
                    </Text>
                    {/* Modal de comentarios */}
                    <View>
                      <Modal
                        visible={this.state.showMe1}
                        onRequestClose={() => console.warn("cerrado")}
                      >
                        <Container>
                          <Header
                            style={{
                              backgroundColor: "#F5F5F5",
                              elevation: 2
                            }}
                          >
                            <Left>
                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({ showMe1: false });
                                }}
                              >
                                <Icon5
                                  name="arrowleft"
                                  size={25}
                                  color="#000"
                                />
                              </TouchableOpacity>
                            </Left>
                            <Body>
                              <Title style={{ color: "black" }}>
                                Comentarios
                              </Title>
                            </Body>
                            <Right>
                              <Button transparent>
                                <Icon2
                                  name="paper-plane"
                                  size={25}
                                  color="#000"
                                />
                              </Button>
                            </Right>
                          </Header>
                          <Content>
                            <CardItem>
                              <Left>
                                <View
                                  style={{
                                    height: 40,
                                    width: 50,
                                    borderRadius: 64
                                  }}
                                >
                                  <Image
                                    source={require("./assets/Imagenes/Historias/snake.jpg")}
                                    style={styles.imageperfil}
                                  />
                                </View>
                                <Text>
                                  <Text style={{ fontWeight: "bold" }}>
                                    DJ snake
                                  </Text>
                                  <Text> Going to be</Text>
                                  <Text note>{"\n"} 5h </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Me gusta </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Responder</Text>
                                </Text>
                              </Left>
                              <Right>
                                <Button transparent>
                                  <Icon
                                    name={this.state.name}
                                    size={16}
                                    color={this.state.buttonColor}
                                    onPress={this.onButtonPress}
                                  />
                                </Button>
                              </Right>
                            </CardItem>
                          </Content>
                          <Footer>
                            <FooterTab
                              style={{
                                backgroundColor: "#F5F5F5",
                                elevation: 2
                              }}
                            >
                              <CardItem>
                                <Left>
                                  <View
                                    style={{
                                      height: 40,
                                      width: 50,
                                      borderRadius: 64
                                    }}
                                  >
                                    <Image
                                      source={require("./assets/Imagenes/Historias/fornite.jpg")}
                                      style={styles.imageperfil2}
                                    />
                                  </View>
                                </Left>
                                <Item
                                  style={{ paddingLeft: 25, marginLeft: 25 }}
                                >
                                  <Input
                                    style={{ color: "black" }}
                                    placeholder="Agrega un comentario..."
                                  />
                                  <Button transparent>
                                    <Text style={{ color: "#A9F5F2" }}>
                                      Publicar
                                    </Text>
                                  </Button>
                                </Item>
                              </CardItem>
                            </FooterTab>
                          </Footer>
                        </Container>
                      </Modal>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe1: true });
                        }}
                      >
                        <Text style={{ color: "#BDBDBD", fontSize: 12 }}>
                          Ver comentarios
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* Modal de comentarios */}
                    <Text style={{ color: "#BDBDBD", fontSize: 9 }}>
                      Hace 4 dias
                      <Text style={{ fontSize: 9 }}>. ver traducción</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
            {/* 2 video*/}
            <View>
              <Card transparent>
                <CardItem>
                  <Left>
                    <View style={{ height: 40, width: 50, borderRadius: 64 }}>
                      <Image
                        source={require("./assets/Imagenes/Historias/ultra.jpg")}
                        style={styles.imageperfil2}
                      />
                    </View>
                    <Text>Ultra music festival</Text>
                  </Left>
                  <Right>
                    <Icon3 name="more-vertical" size={25} color="#000" />
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Video
                    source={require("./assets/Imagenes/Video/ultravideo.mp4")}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    useNativeControls={true}
                    isLooping={false}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                  <Left>
                    <Button transparent>
                      <Icon
                        name={this.state.name2}
                        size={25}
                        color={this.state.buttonColor2}
                        onPress={this.onButtonPress2}
                      />
                    </Button>
                    <Button
                      transparent
                      onPress={() => {
                        this.setState({ showMe2: true });
                      }}
                    >
                      <Icon3 name="message-circle" size={26} color="#000" />
                    </Button>
                    <Button transparent>
                      <Icon2 name="paper-plane" size={25} color="#000" />
                    </Button>
                  </Left>
                  <Right>
                    <Icon name="bookmark-o" size={25} color="#000" />
                  </Right>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                      89.456 Reproducciones
                    </Text>
                    <Text>
                      <Text style={{ fontWeight: "bold" }}>
                        Ultra music festival
                      </Text>
                      <Text>
                        {" "}
                        La musíca nos une en un mismo ritmo... {"\n"}
                      </Text>
                      <Text style={{ color: "blue" }}>#cubev3</Text>
                    </Text>
                    {/* Modal de comentarios */}
                    <View>
                      <Modal
                        visible={this.state.showMe2}
                        onRequestClose={() => console.warn("cerrado")}
                      >
                        <Container>
                          <Header
                            style={{
                              backgroundColor: "#F5F5F5",
                              elevation: 2
                            }}
                          >
                            <Left>
                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({ showMe2: false });
                                }}
                              >
                                <Icon5
                                  name="arrowleft"
                                  size={25}
                                  color="#000"
                                />
                              </TouchableOpacity>
                            </Left>
                            <Body>
                              <Title style={{ color: "black" }}>
                                Comentarios
                              </Title>
                            </Body>
                            <Right>
                              <Button transparent>
                                <Icon2
                                  name="paper-plane"
                                  size={25}
                                  color="#000"
                                />
                              </Button>
                            </Right>
                          </Header>
                          <Content>
                            <CardItem>
                              <Left>
                                <View
                                  style={{
                                    height: 40,
                                    width: 50,
                                    borderRadius: 64
                                  }}
                                >
                                  <Image
                                    source={require("./assets/Imagenes/Historias/user1.jpg")}
                                    style={styles.imageperfil2}
                                  />
                                </View>
                                <Text>
                                  <Text style={{ fontWeight: "bold" }}>
                                    Ladyqbebe
                                  </Text>
                                  <Text> Nice video</Text>
                                  <Text note>{"\n"} 5h </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Me gusta </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Responder</Text>
                                </Text>
                              </Left>
                              <Right>
                                <Button transparent>
                                  <Icon
                                    name={this.state.name}
                                    size={16}
                                    color={this.state.buttonColor}
                                    onPress={this.onButtonPress}
                                  />
                                </Button>
                              </Right>
                            </CardItem>
                          </Content>
                          <Footer>
                            <FooterTab
                              style={{
                                backgroundColor: "#F5F5F5",
                                elevation: 2
                              }}
                            >
                              <CardItem>
                                <Left>
                                  <View
                                    style={{
                                      height: 40,
                                      width: 50,
                                      borderRadius: 64
                                    }}
                                  >
                                    <Image
                                      source={require("./assets/Imagenes/Historias/fornite.jpg")}
                                      style={styles.imageperfil2}
                                    />
                                  </View>
                                </Left>
                                <Item
                                  style={{ paddingLeft: 25, marginLeft: 25 }}
                                >
                                  <Input
                                    style={{ color: "black" }}
                                    placeholder="Agrega un comentario..."
                                  />
                                  <Button transparent>
                                    <Text style={{ color: "#A9F5F2" }}>
                                      Publicar
                                    </Text>
                                  </Button>
                                </Item>
                              </CardItem>
                            </FooterTab>
                          </Footer>
                        </Container>
                      </Modal>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe2: true });
                        }}
                      >
                        <Text style={{ color: "#BDBDBD", fontSize: 12 }}>
                          Ver comentarios
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* Modal de comentarios */}
                    <Text style={{ color: "#BDBDBD", fontSize: 9 }}>
                      Hace 4 dias
                      <Text style={{ fontSize: 9 }}>. ver traducción</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
            {/* 3 */}
            <View>
              <Card transparent>
                <CardItem>
                  <Left>
                    <View style={{ height: 40, width: 50, borderRadius: 64 }}>
                      <Image
                        source={require("./assets/Imagenes/Historias/tomo.jpg")}
                        style={styles.imageperfil2}
                      />
                    </View>
                    <Text>Tomorrowland</Text>
                  </Left>
                  <Right>
                    <Icon3 name="more-vertical" size={25} color="#000" />
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={require("./assets/Imagenes/Publicaciones/tomo2.jpeg")}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                  <Left>
                    <Button transparent>
                      <Icon
                        name={this.state.name3}
                        size={25}
                        color={this.state.buttonColor3}
                        onPress={this.onButtonPress3}
                      />
                    </Button>
                    <Button
                      transparent
                      onPress={() => {
                        this.setState({ showMe3: true });
                      }}
                    >
                      <Icon3 name="message-circle" size={26} color="#000" />
                    </Button>
                    <Button transparent>
                      <Icon2 name="paper-plane" size={25} color="#000" />
                    </Button>
                  </Left>
                  <Right>
                    <Icon name="bookmark-o" size={25} color="#000" />
                  </Right>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                      30.256 Me gusta
                    </Text>
                    <Text>
                      <Text style={{ fontWeight: "bold" }}>Tomorrowland </Text>
                      <Text>Escape reality... </Text>
                      <Emoji name="notes" style={{ fontSize: 16 }} />
                      <Emoji name="raised_hands" style={{ fontSize: 16 }} />
                      <Text style={{ color: "blue" }}>#Tomorrowland</Text>
                      <Text style={{ fontWeight: "bold" }}>
                        {"\n"} bassajackers
                      </Text>
                      <Text> So much energy </Text>
                    </Text>
                    {/* Modal de comentarios */}
                    <View>
                      <Modal
                        visible={this.state.showMe3}
                        onRequestClose={() => console.warn("cerrado")}
                      >
                        <Container>
                          <Header
                            style={{
                              backgroundColor: "#F5F5F5",
                              elevation: 2
                            }}
                          >
                            <Left>
                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({ showMe3: false });
                                }}
                              >
                                <Icon5
                                  name="arrowleft"
                                  size={25}
                                  color="#000"
                                />
                              </TouchableOpacity>
                            </Left>
                            <Body>
                              <Title style={{ color: "black" }}>
                                Comentarios
                              </Title>
                            </Body>
                            <Right>
                              <Button transparent>
                                <Icon2
                                  name="paper-plane"
                                  size={25}
                                  color="#000"
                                />
                              </Button>
                            </Right>
                          </Header>
                          <Content>
                            <CardItem>
                              <Left>
                                <View
                                  style={{
                                    height: 40,
                                    width: 50,
                                    borderRadius: 64
                                  }}
                                >
                                  <Image
                                    source={require("./assets/Imagenes/Historias/user2.jpg")}
                                    style={styles.imageperfil2}
                                  />
                                </View>
                                <Text>
                                  <Text style={{ fontWeight: "bold" }}>
                                    Juana34
                                  </Text>
                                  <Text> Algun día...</Text>
                                  <Text note>{"\n"} 5h </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Me gusta </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Responder</Text>
                                </Text>
                              </Left>
                              <Right>
                                <Button transparent>
                                  <Icon
                                    name={this.state.name}
                                    size={16}
                                    color={this.state.buttonColor}
                                    onPress={this.onButtonPress}
                                  />
                                </Button>
                              </Right>
                            </CardItem>
                          </Content>
                          <Footer>
                            <FooterTab
                              style={{
                                backgroundColor: "#F5F5F5",
                                elevation: 2
                              }}
                            >
                              <CardItem>
                                <Left>
                                  <View
                                    style={{
                                      height: 40,
                                      width: 50,
                                      borderRadius: 64
                                    }}
                                  >
                                    <Image
                                      source={require("./assets/Imagenes/Historias/fornite.jpg")}
                                      style={styles.imageperfil2}
                                    />
                                  </View>
                                </Left>
                                <Item
                                  style={{ paddingLeft: 25, marginLeft: 25 }}
                                >
                                  <Input
                                    style={{ color: "black" }}
                                    placeholder="Agrega un comentario..."
                                  />
                                  <Button transparent>
                                    <Text style={{ color: "#A9F5F2" }}>
                                      Publicar
                                    </Text>
                                  </Button>
                                </Item>
                              </CardItem>
                            </FooterTab>
                          </Footer>
                        </Container>
                      </Modal>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe3: true });
                        }}
                      >
                        <Text style={{ color: "#BDBDBD", fontSize: 12 }}>
                          Ver comentarios
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* Modal de comentarios */}
                    <Text style={{ color: "#BDBDBD", fontSize: 9 }}>
                      Hace 1 dias
                      <Text style={{ fontSize: 9 }}>. ver traducción</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
            {/* 4 */}
            <View>
              <Card transparent>
                <CardItem>
                  <Left>
                    <View style={{ height: 40, width: 50, borderRadius: 64 }}>
                      <Image
                        source={require("./assets/Imagenes/Historias/marshmello.jpg")}
                        style={styles.imageperfil}
                      />
                    </View>
                    <Text>Marshmello</Text>
                  </Left>
                  <Right>
                    <Icon3 name="more-vertical" size={25} color="#000" />
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={require("./assets/Imagenes/Publicaciones/mar.jpg")}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                  <Left>
                    <Button transparent>
                      <Icon
                        name={this.state.name4}
                        size={25}
                        color={this.state.buttonColor4}
                        onPress={this.onButtonPress4}
                      />
                    </Button>
                    <Button
                      transparent
                      onPress={() => {
                        this.setState({ showMe4: true });
                      }}
                    >
                      <Icon3 name="message-circle" size={26} color="#000" />
                    </Button>
                    <Button transparent>
                      <Icon2 name="paper-plane" size={25} color="#000" />
                    </Button>
                  </Left>
                  <Right>
                    <Icon name="bookmark-o" size={25} color="#000" />
                  </Right>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                      1.250 Me gusta
                    </Text>
                    <Text>
                      <Text style={{ fontWeight: "bold" }}>Marshmello </Text>
                      <Text style={{ color: "blue" }}>@robotchiken{"\n"}</Text>
                      <Emoji name="joy" style={{ fontSize: 16 }} />
                      <Emoji name="joy" style={{ fontSize: 16 }} />
                      <Emoji name="joy" style={{ fontSize: 16 }} />
                      <Emoji name="joy" style={{ fontSize: 16 }} />
                      <Emoji name="joy" style={{ fontSize: 16 }} />
                      <Emoji name="joy" style={{ fontSize: 16 }} />
                    </Text>
                    {/* Modal de comentarios */}
                    <View>
                      <Modal
                        visible={this.state.showMe4}
                        onRequestClose={() => console.warn("cerrado")}
                      >
                        <Container>
                          <Header
                            style={{
                              backgroundColor: "#F5F5F5",
                              elevation: 2
                            }}
                          >
                            <Left>
                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({ showMe4: false });
                                }}
                              >
                                <Icon5
                                  name="arrowleft"
                                  size={25}
                                  color="#000"
                                />
                              </TouchableOpacity>
                            </Left>
                            <Body>
                              <Title style={{ color: "black" }}>
                                Comentarios
                              </Title>
                            </Body>
                            <Right>
                              <Button transparent>
                                <Icon2
                                  name="paper-plane"
                                  size={25}
                                  color="#000"
                                />
                              </Button>
                            </Right>
                          </Header>
                          <Content>
                            <CardItem>
                              <Left>
                                <View
                                  style={{
                                    height: 40,
                                    width: 50,
                                    borderRadius: 64
                                  }}
                                >
                                  <Image
                                    source={require("./assets/Imagenes/Historias/user3.jpg")}
                                    style={styles.imageperfil2}
                                  />
                                </View>
                                <Text>
                                  <Text style={{ fontWeight: "bold" }}>
                                    Dj Armin
                                  </Text>
                                  <Emoji
                                    name="smile"
                                    style={{ fontSize: 16 }}
                                  />
                                  <Emoji
                                    name="smile"
                                    style={{ fontSize: 16 }}
                                  />
                                  <Text note>{"\n"} 5h </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Me gusta </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Responder</Text>
                                </Text>
                              </Left>
                              <Right>
                                <Button transparent>
                                  <Icon5 name="hearto" size={16} color="#000" />
                                </Button>
                              </Right>
                            </CardItem>
                          </Content>
                          <Footer>
                            <FooterTab
                              style={{
                                backgroundColor: "#F5F5F5",
                                elevation: 2
                              }}
                            >
                              <CardItem>
                                <Left>
                                  <View
                                    style={{
                                      height: 40,
                                      width: 50,
                                      borderRadius: 64
                                    }}
                                  >
                                    <Image
                                      source={require("./assets/Imagenes/Historias/fornite.jpg")}
                                      style={styles.imageperfil2}
                                    />
                                  </View>
                                </Left>
                                <Item
                                  style={{ paddingLeft: 25, marginLeft: 25 }}
                                >
                                  <Input
                                    style={{ color: "black" }}
                                    placeholder="Agrega un comentario..."
                                  />
                                  <Button transparent>
                                    <Text style={{ color: "#A9F5F2" }}>
                                      Publicar
                                    </Text>
                                  </Button>
                                </Item>
                              </CardItem>
                            </FooterTab>
                          </Footer>
                        </Container>
                      </Modal>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe4: true });
                        }}
                      >
                        <Text style={{ color: "#BDBDBD", fontSize: 12 }}>
                          Ver comentarios
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* Modal de comentarios */}
                    <Text>
                      <Text style={{ fontWeight: "bold" }}>tbhits </Text>
                      Happy .
                      <Emoji name="smile" style={{ fontSize: 16 }} />
                    </Text>
                    <Text style={{ color: "#BDBDBD", fontSize: 9 }}>
                      Hace 2 dias
                      <Text style={{ fontSize: 9 }}>. ver traducción</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
            {/* 5 video*/}
            <View>
              <Card transparent>
                <CardItem>
                  <Left>
                    <View style={{ height: 40, width: 50, borderRadius: 64 }}>
                      <Image
                        source={require("./assets/Imagenes/Historias/tiesto.jpg")}
                        style={styles.imageperfil}
                      />
                    </View>
                    <Text>Tiesto</Text>
                  </Left>
                  <Right>
                    <Icon3 name="more-vertical" size={25} color="#000" />
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Video
                    source={require("./assets/Imagenes/Video/tiestoH.mp4")}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    useNativeControls={true}
                    isLooping={false}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                  <Left>
                    <Button transparent>
                      <Icon
                        name={this.state.name5}
                        size={25}
                        color={this.state.buttonColor5}
                        onPress={this.onButtonPress5}
                      />
                    </Button>
                    <Button
                      transparent
                      onPress={() => {
                        this.setState({ showMe5: true });
                      }}
                    >
                      <Icon3 name="message-circle" size={26} color="#000" />
                    </Button>
                    <Button transparent>
                      <Icon2 name="paper-plane" size={25} color="#000" />
                    </Button>
                  </Left>
                  <Right>
                    <Icon name="bookmark-o" size={25} color="#000" />
                  </Right>
                </CardItem>
                {/* Miguel */}
                <CardItem>
                  <Body>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                      500.235 Reproducciones
                    </Text>
                    <Text>
                      <Text style={{ fontWeight: "bold" }}>Tiesto</Text>
                      These guys make every show come together.
                      <Text style={{ color: "blue" }}>{"\n"}@tiesto</Text>
                      <Text style={{ color: "blue" }}>
                        {"\n"}@hardwell{"\n"}
                      </Text>
                      <Emoji name="smile" style={{ fontSize: 16 }} />
                      <Emoji name="beers" style={{ fontSize: 16 }} />
                      <Emoji name="notes" style={{ fontSize: 16 }} />
                    </Text>
                    {/* Modal de comentarios */}
                    <View>
                      <Modal
                        visible={this.state.showMe5}
                        onRequestClose={() => console.warn("cerrado")}
                      >
                        <Container>
                          <Header
                            style={{
                              backgroundColor: "#F5F5F5",
                              elevation: 2
                            }}
                          >
                            <Left>
                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({ showMe5: false });
                                }}
                              >
                                <Icon5
                                  name="arrowleft"
                                  size={25}
                                  color="#000"
                                />
                              </TouchableOpacity>
                            </Left>
                            <Body>
                              <Title style={{ color: "black" }}>
                                Comentarios
                              </Title>
                            </Body>
                            <Right>
                              <Button transparent>
                                <Icon2
                                  name="paper-plane"
                                  size={25}
                                  color="#000"
                                />
                              </Button>
                            </Right>
                          </Header>
                          {/* Miguel */}
                          <Content>
                            <CardItem>
                              <Left>
                                <View
                                  style={{
                                    height: 40,
                                    width: 50,
                                    borderRadius: 64
                                  }}
                                >
                                  <Image
                                    source={require("./assets/Imagenes/Historias/user4.jpg")}
                                    style={styles.imageperfil2}
                                  />
                                </View>
                                <Text>
                                  <Text style={{ fontWeight: "bold" }}>
                                    MartinXD
                                  </Text>
                                  <Emoji
                                    name="sunglasses"
                                    style={{ fontSize: 16 }}
                                  />
                                  <Text note>{"\n"} 5h </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Me gusta </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> </Text>
                                  <Text note> Responder</Text>
                                </Text>
                              </Left>
                              <Right>
                                <Button transparent>
                                  <Icon5 name="hearto" size={16} color="#000" />
                                </Button>
                              </Right>
                            </CardItem>
                          </Content>
                          <Footer>
                            <FooterTab
                              style={{
                                backgroundColor: "#F5F5F5",
                                elevation: 2
                              }}
                            >
                              <CardItem>
                                <Left>
                                  <View
                                    style={{
                                      height: 40,
                                      width: 50,
                                      borderRadius: 64
                                    }}
                                  >
                                    <Image
                                      source={require("./assets/Imagenes/Historias/fornite.jpg")}
                                      style={styles.imageperfil2}
                                    />
                                  </View>
                                </Left>
                                <Item
                                  style={{ paddingLeft: 25, marginLeft: 25 }}
                                >
                                  <Input
                                    style={{ color: "black" }}
                                    placeholder="Agrega un comentario..."
                                  />
                                  <Button transparent>
                                    <Text style={{ color: "#A9F5F2" }}>
                                      Publicar
                                    </Text>
                                  </Button>
                                </Item>
                              </CardItem>
                            </FooterTab>
                          </Footer>
                        </Container>
                      </Modal>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe5: true });
                        }}
                      >
                        <Text style={{ color: "#BDBDBD", fontSize: 12 }}>
                          Ver comentarios
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* Modal de comentarios */}
                    <Text style={{ color: "#BDBDBD", fontSize: 9 }}>
                      Hace 5 dias
                      <Text style={{ fontSize: 9 }}>. ver traducción</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
          </ScrollView>
        </Content>
        {/* Footer */}
        <Footer>
          <FooterTab style={{ backgroundColor: "#F5F5F5", elevation: 2 }}>
            <Button vertical>
              <Icon4 name="home" size={28} color="#000" />
            </Button>
            <Button vertical>
              <Icon3 name="search" size={28} color="#000" />
            </Button>
            <Button vertical>
              <Icon name="plus-square-o" size={28} color="#000" />
            </Button>
            <Button vertical>
              <Icon5 name="hearto" size={28} color="#000" />
            </Button>
            <Button vertical>
              <Icon5 name="user" size={28} color="#000" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  imagehistoP: {
    height: 60,
    width: 60,
    borderRadius: 65,
    borderWidth: 3
  },
  imagehisto: {
    height: 60,
    width: 60,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#ae1978"
  },
  imageperfil: {
    height: 40,
    width: 40,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: "#FF00A2"
  },
  imageperfil2: {
    height: 40,
    width: 40,
    borderRadius: 64,
    borderWidth: 2
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
