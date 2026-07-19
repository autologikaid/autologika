// src/utils/category.ts

export interface CategoryStyle {
    icon: string;
    color: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {

    "Semua": {
        icon: "📚",
        color: "#64748b",
    },

    "Engine": {
        icon: "⚙️",
        color: "#ef4444",
    },

    "Air Intake": {
        icon: "🌬️",
        color: "#3b82f6",
    },

    "Fuel System": {
        icon: "⛽",
        color: "#f97316",
    },

    "Ignition": {
        icon: "🔥",
        color: "#f59e0b",
    },

    "Cooling System": {
        icon: "❄️",
        color: "#06b6d4",
    },

    "Lubrication": {
        icon: "🛢️",
        color: "#6b7280",
    },

    "Exhaust System": {
        icon: "💨",
        color: "#84cc16",
    },

    "Sensor": {
        icon: "🔧",
        color: "#8b5cf6",
    },

    "ECU": {
        icon: "🧠",
        color: "#6366f1",
    },

    "Electrical": {
        icon: "⚡",
        color: "#eab308",
    },

    "Transmission": {
        icon: "⚙️",
        color: "#0ea5e9",
    },

    "Undercarriage": {
        icon: "🛞",
        color: "#10b981",
    },

    "OBD": {
        icon: "📟",
        color: "#14b8a6",
    },

    "Maintenance": {
        icon: "🧰",
        color: "#f43f5e",
    },

};

export function getCategoryStyle(category: string): CategoryStyle {

    return CATEGORY_STYLES[category] ?? {

        icon: "📂",
        color: "#64748b",

    };

}