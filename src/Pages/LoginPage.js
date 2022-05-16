import { Container, makeStyles, Typography } from "@material-ui/core";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { MdDoubleArrow } from 'react-icons/md'
import { useContext, useEffect, useRef } from 'react'

import { TransactionContext } from "../components/Context/TransactionContext";


const useStyles = makeStyles((theme) => ({
    bannerContent: {
        height: 'auto',
        display: "flex",
        flexDirection: "column",
        paddingTop: '14vh',
        justifyContent: "space-around",
        paddingBottom: 50,
    },
    tagline: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        margin: '20px 0px'
    },
    carousel: {
        display: "flex",
        alignItems: "center",
    },
}));

const shortenAddress = (address) => `${address.slice(0, 8)}...${address.slice(address.length - 7)}`;


const LoginPage = () => {
    const classes = useStyles();
    const {
        currentAccount,
        connectWallet,
    } = useContext(TransactionContext);

    const btnRef = useRef()
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        btnRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }, [currentAccount])

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        className="textGradient"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                            color: '#ff0093',
                            fontSize: '11vw',
                        }}
                    >
                        Cryptogenix
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                            marginBottom: 30,
                            fontSize: '3.2vw',
                        }}
                    >
                        The ultimate Cryptocurrency tracker
                    </Typography>
                </div>
                <div style={{ margin: 'auto' }}>
                    {!currentAccount ? (
                        <div>
                            <button
                                type="button"
                                onClick={connectWallet}
                                className='button colorAnimation'
                            >
                                <p>
                                    Login with Metamask
                                </p>
                            </button>
                            <br />
                            <br />
                            <button
                                type="button"
                                className='button button2'
                            >
                                <p onClick={() => {
                                    window.open('/home', '_self')
                                }} style={{ display: 'flex', flexDirection: 'row', color: '#fff' }}>
                                    Continue without login
                                    <MdDoubleArrow color="#ff0093" fontSize={26} />
                                </p>
                            </button>
                        </div>
                    ) :
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <div
                                className="colorAnimation walletCard"
                                style={{ transition: "0.3s ease", margin: 'auto' }}
                            >
                                <div className="outerCard">
                                    <div className="elementCard">
                                        <div className="innerCard">
                                            <SiEthereum fontSize={21} color="#fff" />
                                        </div>
                                        <BsInfoCircle fontSize={17} color="#fff" />
                                    </div>
                                    <div>
                                        <p style={{
                                            color: '#ffffff',
                                            fontSize: '1.125rem',
                                            lineHeight: '1.25rem',
                                            fontWeight: 300,
                                        }}>
                                            Your Wallet {shortenAddress(currentAccount)}
                                        </p>
                                        <p style={{
                                            marginTop: '0.15rem',
                                            color: '#ffffff',
                                            fontSize: '1.875rem',
                                            lineHeight: '2.25rem',
                                            fontWeight: 600,
                                        }}>
                                            Ethereum
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                className='button button2'
                                style={{ marginTop: '18px' }}
                            >
                                <p onClick={() => {
                                    window.open('/home', '_self')
                                }} style={{ display: 'flex', flexDirection: 'row', color: '#fff' }}>
                                    Continue
                                    <MdDoubleArrow color="#ff0093" fontSize={26} />
                                </p>
                            </button>
                        </div>
                    }
                </div>
                <div style={{ padding: '10px' }} ref={btnRef}></div>
            </Container>
        </div>
    )

}

export default LoginPage;