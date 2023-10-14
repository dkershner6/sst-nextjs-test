import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

const NumberPage: NextPage<{numberData: string}> = ({numberData}) => {
    const router = useRouter();

    return (
        <div>
            <p>Number: {router.query.number}</p>
            <p>Number Data: {numberData}</p>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            numberData: `Number Data for ${context.params?.number}`
            
        },
        revalidate: 300
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { number: "1" } },
            { params: { number: "2" } },
            { params: { number: "3" } },
            { params: { number: "4" } },
            { params: { number: "5" } },
            { params: { number: "6" } },
            { params: { number: "7" } },
            { params: { number: "8" } },
            { params: { number: "9" } },
            { params: { number: "10" } },
        ],
        fallback: "blocking"
    }
}

export default NumberPage;