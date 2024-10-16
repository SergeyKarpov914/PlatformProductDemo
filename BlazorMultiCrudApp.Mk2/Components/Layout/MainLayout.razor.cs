﻿namespace BlazorMultiCrudApp.Mk2.Components.Layout
{
    public partial class MainLayout : IDisposable
    {
        private string _version;
        private DynamicMenu _menu;
        private bool render = true;
        public Func<bool, Task>? OnSideBarShown { get; set; }

        private static Dictionary<string, string> _labels = new() {{"/V5", "BlazorStrap V5"}, };

        protected override void OnInitialized()
        {
        }
        private async void _core_OnVersionChanged(string version)
        {
            _version = version;
            if (_menu != null)
                await _menu.RefreshAsync();
            StateHasChanged();
        }

        public Task InvokeSidebarAsync(bool state)
        {
            if (OnSideBarShown == null)
                return Task.CompletedTask;
            return OnSideBarShown.Invoke(state);
        }
        public async Task Refresh()
        {
            render = false;
            await InvokeAsync(StateHasChanged);
        }

        protected override void OnAfterRender(bool firstRender)
        {
            if (render == false)
            {
                render = true;
                StateHasChanged();
            }
        }

        public void Dispose()
        {
        }
    }
}
