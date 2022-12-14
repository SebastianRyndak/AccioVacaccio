import React, {useEffect, useState} from "react"
import './UserLeftBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Menu, MenuItem, ProSidebar, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {
    FaBuromobelexperte,
    FaHeart,
    FaHourglassHalf,
    FaMapMarked,
    FaMoneyBillAlt,
    FaPencilAlt,
    FaPhotoVideo,
    FaUsers
} from 'react-icons/fa';
import {Link} from "react-router-dom";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import {getResponseFromAxiosGet} from "../../../axios";

const UserLeftBar = () => {
    const [from, setFrom] = useState({});

    const [fromSelect, setFromSelect] = useState("");
    const [afterSelect, setAfterSelect] = useState("");
    const [amount, setAmount] = useState("");
    const [answer, setAnswer] = useState("");
    const exchangeUrl = `http://localhost:8080/exchange/${fromSelect}/${afterSelect}/${amount}`;


    const getAllCurrency = () => {
        axios.get(`https://openexchangerates.org/api/currencies.json`)
            .then(res => {
                setFrom(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getAllCurrency();
    }, [])

    const getExchangeResult = () => {
        if (amount === "") {
            setAmount("1");
        }
        getResponseFromAxiosGet(exchangeUrl, 2).then(resp => setAnswer(resp.data.howMuchAfterConvert));
    };

    const validateAmount = (number) => {
        { number < 1 ? setAmount("1") : setAmount(number) }
    }


    return (
        <div className="App">
            <header>
                <ProSidebar className="sidebar" style={{height: "100%"}}>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaUsers/>}><Link to="/userpage/friends"> My friends</Link></MenuItem>
                        <MenuItem icon={<FaPencilAlt/>}><Link to="/userpage/note"> Notes</Link></MenuItem>
                        <MenuItem icon={<FaMapMarked/>}><Link to="/userpage/place_want_to_go"> Places i want to
                            go </Link></MenuItem>
                        {/*<MenuItem icon={<FaBuromobelexperte/>}><Link*/}
                        {/*    to="/userpage/calculator"> Calculator </Link></MenuItem>*/}
                        <MenuItem icon={<FaPhotoVideo/>}><Link to="/userpage/albums_from_trips"> Albums from
                            trips </Link></MenuItem>
                        <MenuItem icon={<FaHeart/>}><Link to="/userpage/favourite_comments">Favourite
                            comments</Link></MenuItem>
                        <SubMenu title="Money converter" icon={<FaMoneyBillAlt/>}>
                            <Form>
                                <Form.Label style={{color: "orange"}}>From:</Form.Label>
                                <Form.Select as="select"
                                             value={fromSelect}
                                             id="submit"
                                             size="sm"
                                             onChange={(e) => setFromSelect(e.target.value)}
                                             style={{marginLeft: "15%", width: "72%", height: "30px"}}
                                             icon={<FaHourglassHalf/>}
                                >
                                    <option value="">Select currency</option>
                                    {Object.keys(from).map((singleCurrency, index) => {
                                        return <option key={index} id={index}
                                                       value={singleCurrency}>{singleCurrency}</option>
                                    })}
                                </Form.Select>
                                <Form.Label style={{color: "orange"}}>To:</Form.Label>
                                <Form.Select as="select"
                                             value={afterSelect}
                                             id="submit"
                                             size="sm"
                                             onChange={(e) => setAfterSelect(e.target.value)}
                                             style={{marginLeft: "15%", width: "72%", height: "30px"}}
                                             icon={<FaHourglassHalf/>}
                                >
                                    <option value="">Select currency</option>
                                    {Object.keys(from).map((singleCurrency, index) => {
                                        return <option key={index} id={index}
                                                       value={singleCurrency}>{singleCurrency}</option>
                                    })}
                                </Form.Select>

                                <Form.Label style={{color: "orange"}}>Amount:</Form.Label>
                                <Form.Control
                                    style={{width: "40%", marginLeft: "15%"}}
                                    value={amount}
                                    onChange={e => validateAmount(e.target.value)}
                                    type="number"
                                    placeholder="0.0"
                                />

                                <Form.Label style={{color: "orange"}}>=</Form.Label>
                                <Form.Control
                                    style={{width: "40%", marginLeft: "15%", cursor: "pointer"}}
                                    value={answer}
                                    placeholder="0.0"
                                    readonly
                                />
                                <Button style={{marginLeft: "60%"}} onClick={() => getExchangeResult()}
                                        variant="outline-warning">Convert</Button>
                            </Form>
                        </SubMenu>
                    </Menu>
                </ProSidebar>
            </header>
        </div>
    );
}

export default UserLeftBar;


