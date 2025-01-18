using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;

namespace RM
{
    public partial class CustomerButton : PictureBox
    {
        // Constructor
        public CustomerButton()
        {
            InitializeComponent();

            NormalImage = default!;
            HoverImage = default!;

        }

        // Fields
        private Image NormalImage;
        private Image HoverImage;

        // Properties
        [Browsable(true)]
        [Category("Appearance")]
        [Description("The image displayed when the mouse is not hovering.")]
        [DesignerSerializationVisibility(DesignerSerializationVisibility.Visible)]
        public Image ImageNormal
        {
            get {return NormalImage; }
            set { NormalImage = value; }
        }

        [Browsable(true)]
        [Category("Appearance")]
        [Description("The image displayed when the mouse is hovering.")]
        [DesignerSerializationVisibility(DesignerSerializationVisibility.Visible)]
        public Image ImageHover
        {
            get {return HoverImage; }
            set { HoverImage = value; }
        }

        // Event handlers
        private void CustomerButton_MouseHover(object sender, EventArgs e)
        {
            this.Image = HoverImage;
        }

        private void CustomerButton_MouseLeave(object sender, EventArgs e)
        {
            this.Image = NormalImage;
        }
    }
}
