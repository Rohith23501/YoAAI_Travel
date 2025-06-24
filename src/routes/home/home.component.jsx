

import Introduction from '../../components/introduction/intro.component.jsx';

import Steps from '../../components/steps/steps.component.jsx';
import ImageWithButtons from '../../components/image_buttons/image_buttons.component.jsx';
import ChatAssistant from '../../components/chat_assistant/chat_assistant.component.jsx';
import Footer from '../../components/footer/footer.component.jsx';

const Home = () => 
    {
        return (
            <div className="home-container">
                <Introduction />
                <Steps />
                <ImageWithButtons />
               
                 
                
                
                
                <ChatAssistant />
               
                <Footer/>
                
            </div>
            
        );
};

export default Home;