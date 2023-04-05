import React from 'react';
import Container from '../../components/container/container';
import Cookie from '../../components/cookie/cookie';
import Footer from '../../components/footer/footer';
import ResetPassword from '../../components/reset_password/reset_password';
import HeroSimple from '../../components/hero/hero_simple';

export default function ResetPasswordPage() {
  const [code, setCode] = React.useState('');

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    setCode(code);
  }, []);

  return (
    <>
      <section>
        <HeroSimple title="Reset Password" />
        <Container>
        <ResetPassword code={code}/>
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  );
}
