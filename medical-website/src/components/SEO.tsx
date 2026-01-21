import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
    const siteTitle = "MediCare+";
    const defaultDescription = "MediCare+ cung cấp dịch vụ khám chữa bệnh chất lượng cao với đội ngũ bác sĩ chuyên khoa giàu kinh nghiệm và trang thiết bị hiện đại.";

    return (
        <Helmet>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta property="og:title" content={`${title} | ${siteTitle}`} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SEO;
