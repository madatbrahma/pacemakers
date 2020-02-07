import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import images from '../common/Images';
import db from '../common/db';
import { CommentDetails } from '../common/CommentDetails';
import EachComment from '../component/EachComment';
import CommentImages from '../component/CommentImages';

class Comments extends Component {

    constructor(props) {
        //  console.log(props);
        super(props);
        this.state = {
            date: props.date,
            runner: props.runner,
            runnerInFocus: props.runner,
            dataLoaded: false,
            commentOf: props.runner,
            allcomments: [],
            allRunners: []

        };
    }

    populateComments(snapshot) {
        //console.log('snapshotVal of comments is ', snapshot.val());
        let allcomments = [];
        let allRunners = [];
        let activitydate = this.state.date;
        let runner = this.state.runner;
        //   console.log(' creating comments for ',activitydate, runner);
        snapshot.map(function (each) {
            //   let eachComment = JSON.parse(JSON.stringify(each));
          //  console.log('each comment entry is ', each.commentBy, each.comments);
            let commentIs = new CommentDetails(activitydate, runner, each.commentBy, each.comments);
            allcomments.push(commentIs);
            allRunners.push(each.commentBy);

        }


        )

        this.setState({
            allcomments: allcomments,
            allRunners: allRunners,
            dataLoaded: true
        });
    }

    componentDidMount() {
        console.log('get comments for ', this.state.date, this.state.runner);
        let date = '2020-01-30';
        let runner = 'Tilak';
        var commentsRef = db.ref("/weekly-training/comments/" + date + "/" + runner + "/");

        setTimeout(() => {
            commentsRef.on('value', (snapshot) => {

                if (snapshot && snapshot.val()) {
                    this.populateComments(Object.values(snapshot.val()));
                }

            });

        }, 3000);
    }


    getCommentof = () => {
        console.log('getting comments of ', this.state.runnerInFocus);
        let comment = "dummy comment";
        console.log('all comments are ',this.state.allcomments);

        this.state.allcomments.map((each)=>{
            if (each.commentBy === this.state.runnerInFocus) {
                comment = each.comment;
            }
        });
        return comment;

    }

    setNewRunnerInFocus = (runnerInFocus) => {
        console.log('calling setNewRunnerInFocus for ',runnerInFocus);
        this.setState({
            runnerInFocus: runnerInFocus
        });
    }

    render() {

        if (this.state.dataLoaded) {
            return (

                <View style={styles.container}>
                    <CommentImages allruners={this.state.allRunners}
                        runnerInFocus={this.state.runnerInFocus}
                        setNewRunnerInFocus={this.setNewRunnerInFocus.bind(this)} />

                    <EachComment
                        commentBy={this.state.runnerInFocus}
                        comment={this.getCommentof()}
                    />

                </View>
            );
        } else {

            return (

                <View>
                    <Text>Comments</Text>
                </View>
            );

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Comments;