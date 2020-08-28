import React from "react";
import { Avatar } from "./Avatar";
import { Author } from "./Author";
import Time from "./Time";
import {Message} from "./Message";
import ReplyButton from "./ReplyButton";
import RetweetButton from "./RetweetButton";
import LikeButton from "./LikeButton";
import MoreOptionButton from "./MoreOptionButton";


export const Tweet = () =>{
    const tweet = {
        Message:"Something about cats",
        gravatar: "xyz",
        author:{
            handle:"catperson",
            name:"IAMA Cat Person",
        },
        likes: 2,
        retweets: 5,
        timestamp: "2016-07-30 21:24:37",
    };


    return (
        
        <div className="tweet">
        <Avatar
        hash={tweet.gravatar}/>
        <div className="content">
            <div>
                <Author 
                name={tweet.author.name}
                handle={tweet.author.handle}/>
                <Time 
                time={tweet.timestamp}/>
            </div>
            <Message 
            message={tweet.Message}/>
            <div className="buttons">
                <ReplyButton />
                <RetweetButton 
                count={tweet.retweets}/>
                <LikeButton 
                count={tweet.likes}/>
                <MoreOptionButton />
            </div>
        </div>

        
        </div>
    );
};