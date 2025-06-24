import { Outlet} from 'react-router-dom';

import Introduction from '../../components/introduction/intro.component';

import Steps from '../../components/steps/steps.component.jsx';
import ImageWithButtons from '../../components/image_buttons/image_buttons.component';
import ChatAssistant from '../../components/chat_assistant/chat_assistant.component';
import Footer from '../../components/footer/footer.component';

const Home = () => 
    {
        return (
            <div className="home-container">
                <Introduction />
                <Steps />
                <ImageWithButtons />
               
                 <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                    <ChatAssistant />
                </div>
                <Footer/>
                <Outlet />
            </div>
            
        );
};

export default Home;