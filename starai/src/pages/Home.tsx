import { useTranslation } from 'react-i18next';
const Home = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div>
                <h1 className="text-left font-bold text-3xl leading-14">
                    {t('home.welcome-title.small')} <br />{' '}
                    <span className=" text-5xl"> {t('home.welcome-title.big')}</span>
                </h1>
            </div>
        </div>
    );
};

export default Home;
