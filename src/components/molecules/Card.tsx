import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Ícono de WhatsApp
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore"; // Ícono ejemplo

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" fontWeight="bold" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description}
        </Typography>
      </CardContent>
      <IconButton
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          backgroundColor: "green",
          color: "white",
          "&:hover": { backgroundColor: "darkgreen" },
        }}
      >
        <WhatsAppIcon />
      </IconButton>
    </Card>
  );
};

