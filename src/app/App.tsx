import { useRoute } from 'react-router5';
import { pageStructure } from 'utils';

function App() {
    const { route } = useRoute();
    const { Layout, Page } = pageStructure(route);

    return (
        <div className="App">
            <Layout>
                <Page />
            </Layout>
        </div>
    );
}

export default App;
