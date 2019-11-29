import React from 'react';
import './Visualizer.css';
import * as sortingAlgortihms from '../sortingAlgorithms/sortingAlgorithms';

export default class Visualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 310; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {
        const javascriptSortedArr = this.state.array
        .slice
        .sort((a, b) => a - b);
        const sortedArr = sortingAlgortihms.mergeSort(this.state.array)

        console.log(sortedArr)
        console.log(arrayAreEqual(javascriptSortedArr, sortedArr))
    }

    quickSort() {

    }
    
    heapSort() {

    }

    bubbleSort() {

    }

    render() {
        const {array} = this.state;
        return (
            <>
            <div>
                {array.map((value, idx) =>(
                    <div 
                    className="array-bar" 
                    key={idx}
                    style={{height: `${value}px`}}>
                    </div>
                ))}
                </div>
                <button onClick={() => this.resetArray()}>Generate new array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </>
        )
    }   
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function arrayAreEqual(Arr1, Arr2) {
    if (Arr1.length !== Arr2.length) return false;
    for (let i = 0; i < Arr1.length; i++) {
        if (Arr1[i] !== Arr2[i]) return false;
    }
    return true;
}