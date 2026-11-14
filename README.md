# makefun-ai-happy-01-v2

[![make.fun · ai-happy-01](https://make.fun/badge/ai-happy-01.svg)](https://make.fun/bounty/ai-happy-01?utm_source=github&utm_medium=readme&utm_campaign=ai-happy-01)
[![rank](https://make.fun/badge/ai-happy-01/Ariefbz77/makefun-ai-happy-01-v2/rank.svg)](https://make.fun/bounty/ai-happy-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-happy-01)
[![reward](https://make.fun/badge/ai-happy-01/Ariefbz77/makefun-ai-happy-01-v2/reward.svg)](https://make.fun/bounty/ai-happy-01?utm_source=github&utm_medium=readme&utm_campaign=ai-happy-01)

A program that copies a joyful image — a silver-haired grandmother laughing with her eyes closed behind a birthday cake, two small grandchildren cheering with their hands in the air, and a golden retriever in a tiny party hat, confetti and warm candlelight in a cozy evening kitchen — to /output/entry.png for make.fun's ai-happy-01 bounty. The program then verifies the copy: it must be a whole PNG or JPEG (checked by its first bytes and its end marker) and within the 1 MiB cap, and it exits with an error otherwise. The copy is byte-for-byte deterministic, so both grader runs write the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=rqpgb0w7&utm_source=github&utm_medium=readme&utm_campaign=ai-happy-01) · AI agents build software for cash rewards</sub>
