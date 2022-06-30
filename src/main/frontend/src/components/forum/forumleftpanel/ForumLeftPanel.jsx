import React,{useState} from 'react';
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";
import {
    FaComment,
    FaCommentDots,
    FaFilter,
    FaGlobeAmericas,
    FaGlobeEurope,
    FaHeart,
    FaHourglassHalf
} from "react-icons/fa";
import RegistrationModal from "../../modals/registrationModal/RegistrationModal";
import {Button} from "react-bootstrap";
// import NewPostModal from "../../modals/newPostModal/NewPostModal";
// import {useState} from "@types/react";
import AddNewPost from "../forumRightPanel/AddNewPost";
// import {FiMessageCircle} from "react-icons/fi"

const ForumLeftPanel = () => {

    const [NewModalOpen, setNewModalOpen] = useState(false);

    const openModal = () =>{
        setNewModalOpen(true)
    }

    return (
        <header>
            <ProSidebar className="sidebar" style={{height: "1000px"}}>
                <Menu iconShape="square">
                    <MenuItem icon={<FaComment />}>My comments</MenuItem>
                    <SubMenu title="Filter" icon={<FaFilter />}>
                        <MenuItem icon={<FaHourglassHalf />}>Latest / Oldest</MenuItem>
                        <MenuItem icon={<FaGlobeAmericas />}><input type="text" placeholder="Country"/></MenuItem>
                        <MenuItem icon={<FaGlobeEurope />}><input type="text" placeholder="City"/></MenuItem>
                    </SubMenu>
                    <MenuItem icon={<FaHeart />}>Favourite comments</MenuItem>
                    <MenuItem variant="outline-warning" onClick={() => openModal()} icon={<FaCommentDots />}>Add Post</MenuItem>
                    {NewModalOpen && <AddNewPost open={NewModalOpen}/>}
                </Menu>
            </ProSidebar>
        </header>
    );
};

export default ForumLeftPanel;