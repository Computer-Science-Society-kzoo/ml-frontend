import { Output } from "@/components/output";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Head from "next/head";
import { useState } from "react";

interface Result {
  data: any;
  tree: any;
}

export default function Home() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<string>("");

  const fetchGPT = async () => {
    setLoading(true);
    try {
      const [gptRes, treeRes] = await Promise.all([
        fetch("https://mlgptbk.kzoocss.org/aleksandr?input=" + input),
        fetch("https://mlgptbk.kzoocss.org/duure_mall?input=" + input),
        {
          method: "GET",
        },
      ]);

      const [data, tree] = await Promise.all([gptRes.json(), treeRes.json()]);

      const newResult = {
        data: data,
        tree: tree,
      };
      setResults([newResult]);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRequest = async () => {
    await fetchGPT();
  };

  console.log(results);

  return (
    <>
      <Head>
        <title>ML-GPT</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingLeft="20px"
        paddingRight="20px"
      >
        <Typography variant="h5" fontWeight="700" marginBottom={10}>
          Try ML-GPT 👇
        </Typography>
        <textarea
          name="text"
          rows={6}
          placeholder="Please state your opinion about ChatGPT"
          style={{
            padding: 10,
            border: "2px solid #000000",
            borderRadius: 8,
            transition: "border-color 0.3s ease",
            resize: "none",
            overflow: "auto",
            outline: "none",
            lineHeight: "2",
            width: isMobile ? "90vw" : "550px",
          }}
          onChange={(e: any) => setInput(e.target.value)}
          value={input}
        />
        <Box width="120px" marginY={10}>
          <Button
            fullWidth
            disableRipple
            sx={{
              textTransform: "none",
              backgroundColor: "#000000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "lightgrey",
                color: "#fff",
              },
            }}
            onClick={handleRequest}
            endIcon={
              loading && <CircularProgress size={14} sx={{ color: "white" }} />
            }
          >
            Submit
          </Button>
        </Box>
        <Stack>
          {results.length > 0 && (
            <Stack>
              {results.map(({ data, tree }, index) => (
                <Box key={index}>
                  <Output
                    isMobile={isMobile}
                    model={"GPT3.5"}
                    result={data["GPT3.5"]}
                  />

                  <Output
                    isMobile={isMobile}
                    model={"DecisionTree"}
                    result={tree["Tree"]}
                  />
                </Box>
              ))}
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );
}
