import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11}
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("Vanya36");

    let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct ', () => {
    let action = addPostActionCreator("Vanya36");

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("It is my first post");
});

it('after deleting length of message should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

it(`after deleting length shuldn't be decrement if id is incorrect` , () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

