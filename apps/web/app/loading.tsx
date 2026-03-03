import { HexagonLoader } from "@/components/shared/HexagonLoader";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950">
            <HexagonLoader loading />
        </div>
    );
}
