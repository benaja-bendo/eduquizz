import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    title: "",
    description: "",
    questions: [
        {
            id: uuidv4(),
            question: "",
            answers: [
                {
                    id: uuidv4(),
                    answer: "",
                    is_correct: false,
                },
            ],
        },
    ],
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        addQuestions: (state, action) => {
            state.questions = [
                ...state.questions,
                {
                    id: uuidv4(),
                    question: "",
                    answers: [
                        {
                            id: uuidv4(),
                            answer: "",
                            is_correct: false,
                        },
                    ],
                },
            ];
        },
        deleteQuestion: (state, action) => {
            state.questions = state.questions.filter(
                (question) => question.id !== action.payload.index
            );
        },
        setTitleQuestion: (state, action) => {
            state.questions.find(
                (question) => question.id === action.payload.index
            ).question = action.payload.title;
        },
        addAnswers: (state, action) => {
            state.questions.find(
                (question) => question.id === action.payload.index
            ).answers = [
                ...state.questions.find(
                    (question) => question.id === action.payload.index
                ).answers,
                {
                    id: uuidv4(),
                    answer: "",
                    is_correct: false,
                },
            ];
        },

        deleteAnswer: (state, action) => {
            state.questions
                .find(
                    (question) => question.id === action.payload.indexQuestion
                )
                .answers = state.questions
                .find(
                    (question) => question.id === action.payload.indexQuestion
                )
                .answers.filter(
                    (answer) => answer.id !== action.payload.indexAnswer
                );
        },
        setTitleAnswer: (state, action) => {
            state.questions
                .find(
                    (question) => question.id === action.payload.indexQuestion
                )
                .answers.find(
                    (answer) => answer.id === action.payload.indexAnswer
                ).answer = action.payload.title;
        },
        changeCorrectAnswer: (state, action) => {
            state.questions
                .find(
                    (question) => question.id === action.payload.indexQuestion
                )
                .answers.find(
                    (answer) => answer.id === action.payload.indexAnswer
                ).is_correct = action.payload.is_correct;
        },

        rezetState: (state, action) => {
            state.title = "";
            state.description = "";
            state.questions = [
                {
                    id: uuidv4(),
                    question: "",
                    answers: [
                        {
                            id: uuidv4(),
                            answer: "",
                            is_correct: false,
                        },
                    ],
                },
            ];
        },
    },
});
export const {
    setTitle,
    setDescription,
    addQuestions,
    addAnswers,
    setTitleQuestion,
    setTitleAnswer,
    changeCorrectAnswer,
    rezetState,
    deleteQuestion,
    deleteAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;
