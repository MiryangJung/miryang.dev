# Miryang.dev 🖤

My personal dev blog

```
pnpm i
pnpm dev
```

Node.js 22.22.2+, 24.15.0+ 또는 26+를 사용합니다. `.env.local`에 `NEXT_PUBLIC_SUPABASE_URL`과
`NEXT_PUBLIC_SUPABASE_ANON_KEY`를 설정해 주세요.

검증: `pnpm lint`, `pnpm test`, `pnpm typecheck`, `pnpm build`.

## Supabase 활동 유지

`vercel.json`의 Cron이 매일 UTC 00시(한국 시간 오전 9시)에 `/guestbook`을
호출합니다. Vercel Hobby에서는 오전 9시~9시 59분 사이에 실행될 수 있습니다.
현재 방명록 페이지는 `force-dynamic`이며, 호출마다 고정 글·일반 글·전체 개수의
DB 조회 3건을 실행합니다. 더미 데이터나 추가 테이블, 별도 키는 필요하지 않습니다.

프로덕션 배포 후 Vercel의 Settings → Cron Jobs에서 활성화 여부와 실행 로그를
확인합니다. 미리보기 배포와 로컬에서는 예약 실행되지 않습니다. 페이지를 정적으로
전환하거나 DB 조회를 캐시하게 되면 이 Cron도 실제 DB를 조회하도록 변경해야 합니다.

Supabase는 최근 7일간 활동이 적은 무료 프로젝트를 중지할 수 있으며, 공식 문서에서는
하루 몇 건의 DB 요청이 보통 유지에 충분하다고 설명합니다. 이 설정은 중지 방지를
보장하거나 이미 중지된 프로젝트를 복구하지 않습니다. 이미 중지되었다면 Supabase
대시보드에서 먼저 Resume project를 실행해야 합니다.

- [Supabase 프로젝트 중지 정책](https://supabase.com/docs/guides/platform/free-project-pausing)
- [Vercel Cron 사용량과 제한](https://vercel.com/docs/cron-jobs/usage-and-pricing)

## Tech

- [Next.js 16](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/ko/)
- [velite](https://velite.js.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [tailwindcss](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [biome](https://biomejs.dev/)

---

- 2023년 12월 11일 `Next.js 14`로 버전을 올리며 대대적인 수정을 하였습니다.
  - [Next.js 12 구버전 코드](https://github.com/MiryangJung/miryang.dev/tree/next12)
