import React from "react";
import {Field, reduxForm} from "redux-form";


const AddPostForm = (props) => {
    return (
        <form onSubmit={this.props.handleSubmit}>
            <div>
                <Field component={"textarea"} type={"textarea"} name={"postText"} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'profile-add-post'}) (AddPostForm);