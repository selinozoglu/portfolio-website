import {render, screen} from '@testing-library/react'
import AsyncTestComp from "./async-test-comp";

describe('Async component', () => {
    test('renders posts if request succeseeds', async () => {
        render(<AsyncTestComp/>);
        const listItemElement = await screen.findAllByRole('listitem');
        expect(listItemElement).not.toHaveLength(0)
    })
});