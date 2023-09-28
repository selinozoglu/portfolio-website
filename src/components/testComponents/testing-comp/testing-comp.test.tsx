import TestingComp from "./testing-comp";
import {render,screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

describe('first test component',()=>{
    test('renders hello as a text', () => {
        render(<TestingComp />);
        const hiElement = screen.getByText('Hi',{exact:false});
        expect(hiElement).toBeInTheDocument();
    });

    test('renders "How are you" if the button clicked', () => {
        render(<TestingComp />);
        const prgfElement = screen.getByText('How are you',{exact:false});
        expect(prgfElement).toBeInTheDocument();
    });

    test('renders "changed" if the button clicked', () => {

        //Arrange
        render(<TestingComp />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const changedElement = screen.getByText('changed',{exact:false});
        expect(changedElement).toBeInTheDocument()

    });


    test('does not render "how are you" if button clicked', () => {

        //Arrange
        render(<TestingComp />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const changedElement = screen.queryByText('How are you?',{exact:false});
        // expect(changedElement).not.toBeInTheDocument();
         expect(changedElement).toBeNull()
    });
})

