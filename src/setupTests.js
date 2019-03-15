import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

console.error = message => {
  if (/(Failed prop type)/.test(message)) {
    // There is a prop violation
    throw new Error(message)
  }
}
