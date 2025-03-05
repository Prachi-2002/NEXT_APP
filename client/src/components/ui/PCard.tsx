import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCode, FaDatabase, FaCreditCard, FaRocket, FaUsers, FaSync, FaTools } from "react-icons/fa";

const ICONS = {
    code: FaCode,
    database: FaDatabase,
    payment: FaCreditCard,
    rocket: FaRocket,
    users: FaUsers,
    sync: FaSync,
    tools: FaTools,
};

const PCard = ({ title, description, features }) => {
    return (
        <Card className="bg-[#0f0f0f] text-gray-300 border border-gray-800 shadow-lg rounded-xl w-[380px] p-6 
      transition-all duration-300 hover:scale-105 hover:shadow-xl">

            <CardHeader>
                <CardTitle className="text-lg font-semibold relative pb-2 before:absolute before:bottom-0 before:left-0 before:w-16 
          before:h-[2px] before:bg-[#38bdf8] before:transition-all before:duration-300 hover:before:w-full">
                    <FaRocket className="inline-block mr-2 text-[#38bdf8]" /> {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* <p className="text-gray-400 text-sm"><ul> */}
                <ul>
                    {description.map((point, index) => (
                        <li className="p-2 text-sm " key={index}>{point}</li>
                    ))}
                </ul>
                {/* </p> */}

                <div className="space-y-3 text-sm">
                    {features.map(({ icon, text }, index) => {
                        const IconComponent = ICONS[icon] || FaTools;
                        return (
                            <div key={index} className="flex items-center gap-3">
                                <IconComponent className="text-[#38bdf8]" />
                                <span>{text}</span>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};

export default PCard;
