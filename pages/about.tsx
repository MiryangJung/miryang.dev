import Title from '../components/Title.bs';
import AboutProfile from '../components/AboutProfile.bs';
import Container from '../components/Container';
import { meta } from '../data/Metadata.bs';
import { NextSeo } from 'next-seo';

function Aboutpage() {
  return (
    <Container>
      <NextSeo
        title="About"
        canonical={`${meta.url}/about`}
        openGraph={{ url: `${meta.url}/about` }}
      />
      <Title title="About" des="Let me introduce myself." />
      <AboutProfile />
    </Container>
  );
}

export default Aboutpage;
