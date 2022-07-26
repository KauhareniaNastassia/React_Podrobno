import React from 'react'
import {StateType} from "./UncontrolledAccordion_Reducer";
import {reducer, TOGGLE_CONSTANT} from "./reducer";


 test('collapsed should be true', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

     expect(newState.collapsed).toBe(true)
})



test('collapsed should be false', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(false)
})