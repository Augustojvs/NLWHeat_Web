import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc'
import { useEffect } from 'react';

export function LoginBox() {
    const signInUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=9a15a19d92e01280343b'

    function signIn(githubCode: string) {}

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=');

        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=')

            window.history.pushState({}, '', urlWithoutCode);
        }
    }, [])

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24"/>
                Entrar com Github
            </a>
        </div>
    )
}