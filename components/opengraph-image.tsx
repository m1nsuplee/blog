import { ImageResponse } from 'next/server';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(props?: Props): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black/95">
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(new URL('../fonts/Montserrat-Thin.ttf', import.meta.url)).then((res) =>
            res.arrayBuffer(),
          ),
          style: 'normal',
          weight: 100,
        },
      ],
    },
  );
}
