import React from "react";
import clsx from "clsx";
import Image from "next/image";

import { ctaDetails } from "@/data/cta";

const AppBudget = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaDetails.appStoreUrl}>
            <button
                type="button"
                className={clsx(
                    "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit",
                    {
                        "text-white bg-foreground": dark,
                        "text-foreground bg-white": !dark,
                    }
                )}
            >
                <div className="mr-3">
                    <Image
                        src="/images/credit_card.svg"
                        alt="Budget Icon"
                        width={30}
                        height={30}
                    />
                </div>

                <div>
                    <div className="text-xs">Finaces et Enveloppe</div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        BudgetApp
                    </div>
                </div>
            </button>
        </a>
    );
};

export default AppBudget;
