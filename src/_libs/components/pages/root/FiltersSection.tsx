"use client";
import React from "react";
import SelectField from "../../global/SelectField";
import { CompletionStatusOptions } from "@/_libs/statics/CompletionStatusOptions";
import { PriorityLevelOptions } from "@/_libs/statics/PriorityLevelOptions";
import { CategoryOptions } from "@/_libs/statics/CategoryOptions";

export default function FiltersSection() {
    return (
        <div className="w-full py-6">
            <div className="max-w-7xl space-y-4 mx-auto px-4">
                <div className="flex items-center gap-4 w-full">
                    <div className="w-1/2">
                        <SelectField
                            instanceId="completion-status-select"
                            label="Completion Status"
                            name="completion_status"
                            id="completion_status"
                            placeholder="Filter by completion status"
                            options={CompletionStatusOptions}
                        />
                    </div>
                    <div className="w-1/2">
                        <SelectField
                            instanceId="priority-level-select"
                            label="Priority Level"
                            name="priority_level"
                            id="priority_level"
                            placeholder="Filter by priority level"
                            options={PriorityLevelOptions}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <SelectField
                        instanceId="category-select"
                        label="Category"
                        name="category"
                        id="category"
                        isMulti={true}
                        placeholder="Filter by category"
                        options={CategoryOptions}
                    />
                </div>
            </div>
        </div>
    );
}
