namespace Domain.Entities
{
    public class PropertyImage(string file, bool enabled)
    {
        public string Id { get; private set; } = Guid.NewGuid().ToString();
        public string File { get; private set; } = file;
        public bool Enabled { get; private set; } = enabled;

        public void Enable()
        {
            Enabled = true;
        }

        public void Disable()
        {
            Enabled = false;
        }
    }
}
