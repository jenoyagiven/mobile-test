import React from 'react'
import { Text } from 'react-native'
import { View, Container, Content, Card, CardItem, H1, Button, Body } from 'native-base'

const TodoDetailScreen = item => {
    return (
        <Container>
            {/* <Content> */}
                <Card style={{ marginTop: '50%' }}>
                    <CardItem header>
                        <Body>
                            <H1>
                                Todo:{item.todo} 
                            </H1>
                            <Text>
                                ID: {item.id}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Status: {item.status}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Created: {item.dateCreated}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Completed: {item.dateCompleted}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Button info>
                            <Text>Go Back</Text>
                        </Button>
                    </CardItem>
                </Card>
            {/* </Content> */}
        </Container>
    )
}

export default TodoDetailScreen