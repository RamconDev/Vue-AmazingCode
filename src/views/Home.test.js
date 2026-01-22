import { mount } from "@vue/test-utils";
import { describe, expect, vi } from "vitest";
import Home from "./Home.vue";
import { useUserStore } from "../stores/userStore";

describe("Home", () => {
    vi.mock("../stores/userStore", () => ({
        useUserStore: () => ({
            user: "test",
            getUser: () => {}
        })
    }));

    it("render component correctly", () => {
        const wrapper = mount(Home);

        expect(wrapper.find("h2").text()).toBe("HOME")
    })

    it("inscrements counter when button is clicked", async () => {
        const wrapper = mount(Home);
        
        expect(wrapper.find("#counter").text()).toContain("Counter: 1");

        await wrapper.find("#counter-btn").trigger("click");
        
        expect(wrapper.find("#counter").text()).toContain("Counter: 2");
    })
});