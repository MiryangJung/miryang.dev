import { BlogInfo, Copyright, FooterContainer, SocialIcon, SocialIconWrap } from './Footer.style'
import metadata from '../data/metadata'

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconWrap>
        {metadata.social.github && (
          <a href={metadata.social.github} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/github.svg" alt="github" />
          </a>
        )}
        {metadata.social.facebook && (
          <a href={metadata.social.facebook} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/facebook.svg" alt="facebook" />
          </a>
        )}
        {metadata.social.instagram && (
          <a href={metadata.social.instagram} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/instagram.svg" alt="instagram" />
          </a>
        )}
        {metadata.social.linkedin && (
          <a href={metadata.social.linkedin} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/linkedin.svg" alt="linkedin" />
          </a>
        )}
        {metadata.social.stackoverflow && (
          <a href={metadata.social.stackoverflow} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/stackoverflow.svg" alt="stackoverflow" />
          </a>
        )}
        {metadata.social.twitter && (
          <a href={metadata.social.facebook} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/twitter.svg" alt="twitter" />
          </a>
        )}
      </SocialIconWrap>
      <Copyright>
        Copyright © {new Date().getFullYear()} {metadata.author}
      </Copyright>
      <BlogInfo href={metadata.repo} rel="noreferrer">
        miryang.dev
      </BlogInfo>
    </FooterContainer>
  )
}

export default Footer
