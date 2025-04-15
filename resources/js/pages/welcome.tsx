import { WhenVisible } from '@inertiajs/react';
import { LoaderCircleIcon } from 'lucide-react';

function OptionalPropLoadedWhenVisible({ data, children }: { data: string; children: any }) {
    return (
        <div className="flex h-screen items-center justify-center border-b border-slate-500 py-48">
            <WhenVisible fallback={<LoaderCircleIcon className="animate-spin" />} data={data}>
                {children}
            </WhenVisible>
        </div>
    );
}

export default function Welcome({ one, two, three, four }: { one: string; two: string; three: string; four: string }) {
    return (
        <>
            <OptionalPropLoadedWhenVisible data="one">
                <h1>{one}</h1>
            </OptionalPropLoadedWhenVisible>

            <OptionalPropLoadedWhenVisible data="two">
                <h1>{two}</h1>
            </OptionalPropLoadedWhenVisible>

            <OptionalPropLoadedWhenVisible data="three">
                <h1>{three}</h1>
            </OptionalPropLoadedWhenVisible>

            <OptionalPropLoadedWhenVisible data="four">
                <h1>{four}</h1>
            </OptionalPropLoadedWhenVisible>
        </>
    );
}
