interface Props{
    params: { slug: string };
}

export default function DetailBlog({ params }: Props) {
    return <h1>haloooooooooo tess: {params.slug}</h1>;
}