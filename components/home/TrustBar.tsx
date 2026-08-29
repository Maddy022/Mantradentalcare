import { Award, Users, Star, Stethoscope } from "lucide-react";
import { stats } from "@/lib/data";

const iconList = [Award, Users, Star, Stethoscope];

export function TrustBar() {
  return (
    <div className="bg-white border-y border-border py-8 sm:py-10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 divide-x-0 lg:divide-x divide-border">
          {stats.map((stat, index) => {
            const Icon = iconList[index] || Star;
            return (
              <div key={index} className={`flex items-center gap-4 ${index !== 0 ? 'lg:pl-12' : ''}`}>
                <div className="bg-surface p-3.5 rounded-2xl text-primary shrink-0 border border-border shadow-xs">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="font-bold text-2xl sm:text-3xl text-text-primary font-heading tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
