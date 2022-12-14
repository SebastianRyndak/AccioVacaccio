import React, {useEffect, useState} from 'react';
import UserLeftBar from "../../UserLeftBar";
import {Card, FormControl, InputGroup} from "react-bootstrap";
import SingleFriend from "./SingleFriend";
import SingleSearchedFriend from "./SingleSearchedFriend";
import {getResponseFromAxiosGet} from "../../../../../axios";

const MyFriends = () => {

    const [nameForSearch, setNameForSearch] = useState("")
    const [searchedFriend, setSearchedFriend] = useState([])
    const [allFriends, setAllFriends] = useState([])
    const searchAllFriendsUrl = `http://localhost:8080/search_friend/id/${sessionStorage.getItem("userId")}`;

    useEffect(() => {
        (async() => {
            await searchAllFriends();
        })();
    }, [])


    const searchAllFriends = async () => {
        await getResponseFromAxiosGet(searchAllFriendsUrl,2).then(res => setAllFriends(res.data));
    };

    const searchFriendByName = (name) => {
        if (name !== "") {
            const searchFriendUrl = `http://localhost:8080/search_friend/${name}`;
            setNameForSearch(name)
            getResponseFromAxiosGet(searchFriendUrl,2).then(res => setSearchedFriend(res.data))
        } else {
            setSearchedFriend([])
        }
    };

    return (
        <div>
            <UserLeftBar/>
            <Card
                bg="dark"
                text={'white'}
                className="mb-2 right">
                <Card.Header style={{textAlign: "center", color: "orange"}}><h2>My friends</h2></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Card
                            bg="dark">
                            <Card.Header style={{display: "flex"}}>
                                <div className="container h-100" style={{margin: 20}}>
                                    <div className="row h-100 justify-content-center align-items-center"/>
                                    <InputGroup className="col-6">
                                        <FormControl
                                            placeholder="Search friend"
                                            aria-label="Search friend"
                                            aria-describedby="basic-addon2"
                                            value={nameForSearch}
                                            onChange={(e) => searchFriendByName(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Header>
                        </Card>
                        <Card
                            bg="dark"
                            style={{marginTop: 10, height: "100%"}}>
                            <Card.Body id="friends-list">
                                {searchedFriend.length ?
                                    <div>
                                        {
                                            searchedFriend.map((friend, index) => {
                                                if (friend.id.toString() !== sessionStorage.getItem("userId")) {
                                                    return <SingleSearchedFriend myUser={friend} key={index}/>
                                                }
                                            })
                                        }
                                    </div> :
                                    <div>
                                        {allFriends.length ?
                                            allFriends.map((friend, index) => {
                                                return <SingleFriend myUser={friend} key={index}/>
                                            })
                                            :
                                            <div style={{color: "orange"}}>You don't have friends :(</div>
                                        }
                                    </div>
                                }
                            </Card.Body>
                        </Card>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyFriends;