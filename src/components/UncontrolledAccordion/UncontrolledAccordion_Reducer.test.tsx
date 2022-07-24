import {reducer, StateType, TOGGLE_CONSTANT} from "./UncontrolledAccordion_Reducer";

test('reducer should change value to opposite value', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})



    expect(newState).toBe(true)
})




test('collapsed should be false', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})



    expect(newState).toBe(false)
})

test('reducer should be fake', () => {

    const state: StateType = {
        collapsed: false
    }

    expect( () => {
        reducer(state, {type: 'FAKE_ACTION'})
    } ).toThrowError()

})