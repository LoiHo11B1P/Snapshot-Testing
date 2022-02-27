import renderer from 'react-test-renderer'
import GitHubCard from './Components/GitHubCard/GitHubCard'

test('GitHubCard render img, name and text', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
    
    expect(tree).toMatchSnapshot()
})
